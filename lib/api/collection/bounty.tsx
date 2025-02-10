import apiClient from "../client";
import { customError } from "../client";

export const getBountyByID = async () => {
    try {
      const response = await apiClient.get('back-office/businesses/overview');
      return response.data;
    } catch (error:any) {
      return customError(503, `Error fetching data: ${error.message}`);
    }
};


export const getBountys = async () => {
  try {
    const response = await apiClient.get('back-office/businesses/overview');
    return response.data;
  } catch (error:any) {
    return customError(503, `Error fetching data: ${error.message}`);
  }
};


export const submitBounty = async (data:any) => {
  try {
    const response = await apiClient.post(`comments/`, data);
    return response.data;
  } catch (error:any) {
    return customError(503, `Error sending data: ${error.message}`);
  }
};


