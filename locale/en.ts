export const en = {
  firebaseErrors: {
    'auth/app-deleted': 'The Firebase project has been deleted.',
    'auth/app-not-authorized': 'The app is not authorized to use Firebase Authentication.',
    'auth/argument-error': 'An argument does not meet the expected type or range.',
    'auth/invalid-api-key': 'The provided API key is invalid.',
    'auth/invalid-user-token': 'The user\'s credential is no longer valid.',
    'auth/network-request-failed': 'A network error occurred.',
    'auth/operation-not-allowed': 'The identity provider is not enabled.',
    'auth/too-many-requests': 'Too many requests were made to a server method.',
    'auth/unauthorized-domain': 'The app domain is not authorized.',
    'auth/user-disabled': 'The user account has been disabled.',
    'auth/user-not-found': 'User not found. Please check your credentials.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/account-exists-with-different-credential': 'An account already exists with the same email but different sign-in credentials. Try signing in using a different method.',
    'auth/email-already-in-use': 'The email address is already in use by another account. Please choose a different email.',
    'auth/popup-closed-by-user': 'Authentication popup closed by the user. Please try again.',
    'auth/user-token-expired': 'The uses credential has expired.',
    'auth/web-storage-unsupported': 'Web storage is not supported.',
    'cancelled': 'The operation was cancelled.',
    'unknown': 'An unknown error occurred.',
    'invalid-argument': 'A provided argument is invalid.',
    'deadline-exceeded': 'The deadline for the operation expired.',
    'not-found': 'The requested document or resource was not found.',
    'already-exists': 'The document or resource already exists.',
    'permission-denied': 'The caller does not have permission to execute the specified operation.',
    'datastale': 'The data is stale.',
    'failure': 'The operation failed with an unspecified error.',
    'permission_denied': 'Permission to access the specified data is denied.',
    'auth/invalid-verification-code': 'The provided verification code is invalid.',
    'auth/missing-verification-code': 'A verification code must be provided.',
    'auth/code-expired': 'The verification code has expired.',
    'auth/code-invalid': 'The verification code is invalid.',
    'auth/missing-verification-id': 'A verification ID must be provided.',
    'auth/invalid-verification-id': 'The provided verification ID is invalid.',
    'FAILED_PRECONDITION': 'Firebase index required. please contact the website admin or change the filter.',
  },
  auth: {

  },

};

const enJson = JSON.stringify(en, null, 2);
export default enJson;
