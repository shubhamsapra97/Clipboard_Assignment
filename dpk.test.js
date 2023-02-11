const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  describe("event partitionKey exists", () => {
    it("does not convert candidate to string & length less than MAX_PARTITION_KEY_LENGTH", () => {
      const event = {
        partitionKey: "hi"
      };
      const trivialKey = deterministicPartitionKey(event);
      expect(trivialKey).toBe("hi");
    });

    it("converts candidate to string & length less than MAX_PARTITION_KEY_LENGTH", () => {
      const event = {
        partitionKey: 12
      };
      const trivialKey = deterministicPartitionKey(event);
      expect(trivialKey).toBe("12");
    });
  });

  describe("event partitionKey does not exists", () => {
    it("does not convert candidate to string & length less than MAX_PARTITION_KEY_LENGTH", () => {
      const event = {
        randomKey: "hi"
      };
      const trivialKey = deterministicPartitionKey(event);
      expect(trivialKey).toBe(crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex"));
    });
  });
});
