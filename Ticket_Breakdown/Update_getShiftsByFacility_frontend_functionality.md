# BackStory
We updated backend logic to add the ability for Facilities to save their own custom ids for each Agent they work with. getShiftsByFacility is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each. getShiftsByFacility backend functionality is updated to include facilityAgentId in the response.

# Desired Outcome
We need to update getShiftsByFacility related frontend functionality to display the custom agent id field in UI.

# Acceptance Criteria
- Review getShiftsByFacility frontend logic and the update db query response.
- Update UI with updated query response to display facilityAgentId in the facilityShifts Page
- Add unit tests to validate the logic.

# Time/Efforts Estimate
- 1 day / 1 points

## Assumptions:
facilityShifts page displaying facilities shifts already exists

## Time/Efforts Consideration
- Reviewing related logic (for someone new with feature) and add updating UI with new fields
- Unit tests
- PR review comments and bug resolution can adjusted in this time frame
