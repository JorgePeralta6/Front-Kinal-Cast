export const validateConfirPassword = (pass, confPass) => {
    return pass === confPass
}

export const passwordConfirmationMessage = 'Las contresallas no coinciden.'