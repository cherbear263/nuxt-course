//global route middleware runs every time a route is changed
// a use case might be analytics or logging
export default defineNuxtRouteMiddleware((to, from) => {
  const navigationHistory = useLocalStorage('history', []);
  navigationHistory.value.push(to.path);
 });