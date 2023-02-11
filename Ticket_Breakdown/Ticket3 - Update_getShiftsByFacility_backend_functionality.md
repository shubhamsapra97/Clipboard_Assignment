# BackStory
We updated backend logic to add the ability for Facilities to save their own custom ids for each Agent they work with. Frontend client now includes customAgentId with the api params and FacilityAgents table was created to store the facility agent mapping. getShiftsByFacility is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each.

# Desired Outcome
We need to update getShiftsByFacility related backend functionality to include the custom agent id field.

# Acceptance Criteria
- Review Add_Custom_Agent_Id_To_Db.md to understand facility agent mapping functionality
- Review getShiftsByFacility logic to understand the current implementation
- Update getShiftsByFacility related backend to include facilityAgentId to the response.
- Add unit tests to validate the logic.

# Time/Efforts Estimate
- 2 day / 2 points

## Assumptions:
N/A

## Time/Efforts Consideration
- Reviewing related logic (for someone new with feature) and add updating logic as per 3 layer architecture
- Unit tests for each layer (controller, service and repo)
- PR review comments and bug resolution can adjusted in this time frame
