// Simple auth utility
const AUTH_KEY = 'calendar_user_role';

export const UserRoles = {
  ADMIN: 'admin',
  USER: 'user'
};

export const setUserRole = (role) => {
  localStorage.setItem(AUTH_KEY, role);
};

export const getUserRole = () => {
  return localStorage.getItem(AUTH_KEY) || UserRoles.USER;
};

export const isAdmin = () => {
  return getUserRole() === UserRoles.ADMIN;
};

export const checkPermission = (requiredRole) => {
  const currentRole = getUserRole();
  if (requiredRole === UserRoles.ADMIN) {
    return currentRole === UserRoles.ADMIN;
  }
  return true; // Regular users can access user-level features
}; 