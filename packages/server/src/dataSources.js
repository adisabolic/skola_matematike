import * as models from './services';

// API sufix is used somewhat arbitrarily.
// The  underlying service that returns the requested data
// can be a direct database access (as is the case in this project).
export default () => ({
  UserAPI: models.User,
  RoleAPI: models.Role,
  CourseAPI: models.Course,
  SchoolYearAPI: models.SchoolYear,
  CourseStudentAPI: models.CourseStudent,
  CycleAPI: models.Cycle,
  LectureAPI: models.Lecture,
  TestAPI: models.Test,
  ResultAPI: models.Result,
  NotificationAPI: models.Notification,
  HomeworkAPI: models.Homework,
  HomeworkCommentAPI: models.HomeworkComment,
  HourCountAPI: models.HourCount,
  HourPriceAPI: models.HourPrice,
  StudentPaymentAPI: models.StudentPayment,
  MentorPaymentAPI: models.MentorPayment,
});
