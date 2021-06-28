import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";

import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import ManageFiles from "views/examples/ManageFiles.js";
import EmployeeReg from "views/examples/EmployeeReg.js";
import EmployeeList from "views/examples/EmployeeList.js";
import AttendanceLogs from "views/examples/AttendanceLogs";
import LeavesMng from "views/examples/LeavesMng.js";
import ManageRec from "views/examples/ManageRec.js";
import MemoList from "views/examples/MemoList.js";
import RecordsManagement from "views/examples/RecordsManagement.js";
import Message from "views/examples/Messages.js";
import AttendanceArchive from "views/examples/AttendanceArchive.js";
import UploadFiles from "views/examples/UploadFiles.js";
import GovDeduct from "views/examples/GovDeduct.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },
  {
    path: "/EmployeeRegistration",
    name: "Employee Registration",
    component: EmployeeReg,
    layout: "/admin",
  },
  {
    path: "/EmployeeList",
    name: "Employee List",
    component: EmployeeList,
    layout: "/admin",
  },
  {
    path: "/ManageRecords",
    component: ManageRec,
    layout: "/admin",
  },
  {
    path: "/ManageFiles",
    component: ManageFiles,
    layout: "/admin",
  },
  {
    path: "/AttendanceLogs",
    component: AttendanceLogs,
    layout: "/admin",
  },
  {
    path: "/LeavesManagement",
    name: "Leaves Management",
    component: LeavesMng,
    layout: "/admin",
  },
  {
    path: "/Announcements&Memos",
    name: "Announcements",
    component: MemoList,
    layout: "/admin",
  },
  {
    path: "/Messages",
    name: "Messages",
    component: Message,
    layout: "/admin",
  },
  {
    path: "/RecordsManagement",
    name: "Records Management",
    component: RecordsManagement,
    layout: "/admin",
  },
  {
    path: "/UploadFiles",
    name: "Upload Files",
    component: UploadFiles,
    layout: "/admin",
  },
  {
    path: "/GovernmentDeduction",
    name: "Government Deductions",
    component: GovDeduct,
    layout: "/admin",
  },
  {
    path: "/AttendanceArchive",
    name: "Attendance Logs Archive",
    icon: "ni ni-planet text-blue",
    component: AttendanceArchive,
    layout: "/admin",
  },

];
export default routes;
