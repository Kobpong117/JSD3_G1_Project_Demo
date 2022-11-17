
const validateInfo = (values) => {

    let invalid = {}

    if (!values.activityName) {
        invalid.activityName = "Please set an activity name"
    }

    if (!values.description) {
        invalid.description = "Please provide some description"
    }

    if (!values.activityType) {
        invalid.activityType = "Please select an activity type"
    }

    if (!values.duration) {
        invalid.duration = "Please set the duration time for you activity between 10 - 360 minute"
    }

    if (!values.date) {
        invalid.date = "Please select the date for your activity"
    }

    return invalid
}

export default validateInfo