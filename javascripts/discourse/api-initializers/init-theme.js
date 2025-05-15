import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  const user = api.getCurrentUser();
  const body = document.body;

  if (user) {
    user.groups
      .map((g) => `group-${g.name}`)
      .forEach((g) => body.classList.add(g));
  }
});
