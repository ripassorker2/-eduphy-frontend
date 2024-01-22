import * as Yup from "yup";

export const resistationSchema = Yup.object({
    fullName: Yup.string()
        .min(3, "Full name must be at least 3 characters")
        .max(40, "Full name must be at most 40 characters")
        .required("Please enter your full name."),
    email: Yup.string().email("Email must be a valid email").required(),
    dateOfBirth: Yup.string().required("Please enter your Birth date."),
    nidOrBirthNumber: Yup.string()
        .min(9, "NID Or Birth number must be at least 10 digits")
        .max(18, "NID Or Birth number must be at most 17 digits")
        .required("Please enter your NID Or Birth number."),
    contactNumber: Yup.string()
        .min(10, "Contact number must be at least 11 digits")
        .max(12, "Contact number must be at most 11 digits")
        .required("Please enter your contact number."),
    // profileImage: Yup.object().shape({
    //     file: Yup.mixed().required("Profile picture is required."),
    // }),
    parmanentAddress: Yup.string()
        .min(5, "Parmanent address must be at least 5 characters")
        .required("Please enter your parmanent address."),

    // educationalQualification: Yup.string().required(
    //     "Please enter your Educational Qualification."
    // ),

    password: Yup.string()
        .required("No password provided.")
        .min(6, "Password is too short - should be 6 chars minimum.")
        .max(16, "Password is too long - should be 16 chars maximum."),
    confirmPassword: Yup.string()
        .required("No password provided.")
        .oneOf([Yup.ref("password"), null], "Password doesn't match.")
        .nullable(),
});

export const loginSchema = Yup.object({
    email: Yup.string().email("Email must be a valid email").required(),
    password: Yup.string()
        .min(6, "Password is too short - should be 6 chars minimum.")
        .max(16, "Password is too long - should be 16 chars maximum.")
        .required("No password provided."),
});
