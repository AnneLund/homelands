export default function AuthHeader() {
  const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";

  if (currentUser && currentUser.state.access_token) {

    return {
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${currentUser.state.access_token}`,
    };
  } else {
    return {};
  }
}
