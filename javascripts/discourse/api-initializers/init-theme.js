import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  const user = api.getCurrentUser();
  const body = document.body;

  if (user) {
    // if user is present, then they belong to logged_in_users
    body.classList.add("group-logged_in_users");
    
    // add specific auto and custom groups
    user.groups?.forEach((g) => {
      body.classList.add(`group-${g.name}`);
    });
  } else {
    // if user is null, then they belong to anonymous_users
    body.classList.add("group-anonymous_users");
  }
});
