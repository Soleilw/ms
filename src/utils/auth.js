const roles = 'editor'

export function getRoles() {
	return sessionStorage.getItem(roles);
}

export function setRoles(roles) {
	return sessionStorage.setItem(roles, roles);
}

export function removeRoles(roles) {
	return sessionStorage.removeItem(roles);
}