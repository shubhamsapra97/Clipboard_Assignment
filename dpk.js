// Explanation:
// Extracted `getCandidate` logic out of `deterministicPartitionKey` function
// because it's reusable and can be used in other implementations.

// Did not extract candidate validation/fallback logic (line 36-46) in a separate function
// because i think this logic is specific to this implementation and can
// vary between functionalities.

const crypto = require("crypto");

/**
 * @param {object} event
 * @returns {string} stringified candidate value
 */
const getCandidate = (event) => {
  if (event) {
  
    if (event.partitionKey) {
      return event.partitionKey;
    }

    const data = JSON.stringify(event);
    return crypto.createHash("sha3-512").update(data).digest("hex");
  
  }
}

const deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  let candidate = getCandidate(event);

  if (candidate) {
    if (typeof candidate !== "string") {
      candidate = JSON.stringify(candidate);
    }
  } else {
    candidate = TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  return candidate;
};

module.exports = { deterministicPartitionKey };
