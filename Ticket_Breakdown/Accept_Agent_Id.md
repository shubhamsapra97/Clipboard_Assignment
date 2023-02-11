# BackStory
Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.

# Desired Outcome
Facilties should be able to assign custom id to agents and should be able to view same id in the reports generated.

# Acceptance Criteria
- Review Facility-Agent assigning functionality
- While assigning agent to the facility, add input for facility to add custom agent id
- Add Validations for the agent custom id input
- Update the backend Query to include customAgentId field
- Add unit tests to validate the logic

# Time/Efforts Estimate
- 1 day / 1 points

## Assumptions:
I made an assumption that mapping agent to facility is a two level process.
- Clipboard will suggest agents to the facility
- The facility will approve the agents
The review page will contain a form with few inputs including the custom agent id where facility can add custom id to the agent.

## Time/Efforts Consideration
- Reviewing previous logic (for someone new with feature) and logic
- Unit tests
- PR review comments and bug resolution can adjusted in this time frame
