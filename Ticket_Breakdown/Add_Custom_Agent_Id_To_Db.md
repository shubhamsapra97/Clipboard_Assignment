# BackStory
Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them. Frontend client now includes customAgentId with the api params.

# Desired Outcome
We should be able to store facility-agent custom id mapping in database.

# Acceptance Criteria
- Create a facility agent mapping table (eg: FacilityAgents)
- Follow three layer architecture guidelines
- Add logic to create a new column to the FacilityAgents table to store the custom agent id mapped to facility (eg: agentId)
- Add/Update table indexes as per requirement
- Add unit tests to validate the logic

# Time/Efforts Estimate
- 2 day / 2 points

## Assumptions:
Facility agent mapping logic doesn't exists.

## Time/Efforts Consideration
- Reviewing related logic (for someone new with feature) and add adding logic as per 3 layer architecture
- Unit tests for each layer (controller, service and repo)
- PR review comments and bug resolution can adjusted in this time frame
