/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "../client";
import { customError } from "../client";


export const signUp = async (data:any) => {
  try {
    const response = await apiClient.post("auth/signup", data);
    return response.data;
  } catch (error:any) {
    const errorCode = error.response?.data?.statusCode;
    const message = error.response?.data?.message;
    return customError(
      errorCode || 503,
      `Error creating account: ${message || error.message}`
    );
  }
};

export const login = async (data:any) => {
  try {
    const response = await apiClient.post("auth/login", data);
    return response.data;
  } catch (error:any) {
    const errorCode = error.response?.data?.statusCode;
    const message = error.response?.data?.message;
    return customError(
      errorCode || 503,
      `Error logging in: ${message || error.message}`
    );
  }
};

// export const verifyOtp = async (data) => {
//   try {
//     const response = await apiClient.post("auth/verify-otp", data);
//     return response.data;
//   } catch (error) {
//     const errorCode = error.response?.data?.statusCode;
//     const message = error.response?.data?.message;
//     return customError(
//       errorCode || 503,
//       `Error verifying email: ${message || error.message}`
//     );
//   }
// };

// export const resendOtp = async (data) => {
//   try {
//     const response = await apiClient.post("auth/resend-otp", data);
//     return response.data;
//   } catch (error) {
//     const errorCode = error.response?.data?.statusCode;
//     const message = error.response?.data?.message;
//     return customError(
//       errorCode || 503,
//       `Error resending otp: ${message || error.message}`
//     );
//   }
// };

// export const initiatePasswordReset = async (data) => {
//   try {
//     const response = await apiClient.post("auth/reset-email", data);
//     return response.data;
//   } catch (error) {
//     const errorCode = error.response?.data?.statusCode;
//     const message = error.response?.data?.message;
//     return customError(
//       errorCode || 503,
//       `Error initiating reset: ${message || error.message}`
//     );
//   }
// };

// export const resetPassword = async (data, token) => {
//   try {
//     const response = await apiClient.patch("user/business/password", data, {
//       headers: {
//         Authorization: "Bearer " + token,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     const errorCode = error.response?.data?.statusCode;
//     const message = error.response?.data?.message;
//     return customError(
//       errorCode || 503,
//       `Error resetting password: ${message || error.message}`
//     );
//   }
// };

// export const sendOneLayerOtp = async (data) => {
//   try {
//       const response = await apiClient.post("auth/send-otp-one-layer", data);
//       return response.data
//   }
//   catch (error) {
//       const errorCode = error.response?.data?.statusCode;
//       const message = error.response?.data?.message;
//       return customError(
//           errorCode,
//           `Error resending one-time password: ${message || error.message}`
//       );
//   }
// }

// export const validateLogin = async (data) => {
//   try {
//       const response = await apiClient.post("auth/validate-credentials", data);
//       return response.data
//   }
//   catch (error) {
//       const errorCode = error.response?.data?.statusCode;
//       const message = error.response?.data?.message;
//       return customError(
//           errorCode,
//           `${message || error.message}`
//       );
//   }
// }
// export const sendTwoLayerOtp = async (data) => {
//   try {
//       const response = await apiClient.post("auth/send-otp", data);
//       return response.data
//   }
//   catch (error) {
//       const errorCode = error.response?.data?.statusCode;
//       const message = error.response?.data?.message;
//       return customError(
//           errorCode,
//           `Error getting one-time password: ${message || error.message}`
//       );
//   }
// }

// export const updateBusinessStatus = async (data,businessId) => {
//   try {
//       const response = await apiClient.patch(`business/${businessId}`, data);
//       return response.data
//   }
//   catch (error) {
//       const errorCode = error.response?.data?.statusCode;
//       const message = error.response?.data?.message;
//       return customError(
//           errorCode,
//           `Error: ${message || error.message}`
//       );
//   }
// }

