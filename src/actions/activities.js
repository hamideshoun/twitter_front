export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";

export function receiveActivities(activities) {
  return {
    type: RECEIVE_ACTIVITIES,
    activities
  };
}
