export default function createError(code) {
  let msg = "";
  switch (code) {
    case "auth/email-already-in-use":
      msg = "Email already in use";
      break;
    case "auth/weak-password":
      msg = "Come on, input a stonger password";
      break;
    case "auth/user-not-found":
      msg = "You are not registered yet!";
      break;
    case "auth/wrong-password":
      msg = "Your password is incorrect";
      break;
    case "auth/network-request-failed":
      msg = "Could not connect  to server";
      break;
    default:
      msg = "Unknown error occurred";
  }
  return msg;
}
