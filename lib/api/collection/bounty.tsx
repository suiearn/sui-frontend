/* eslint-disable @typescript-eslint/no-explicit-any */
import apiClient from "../client";
import { customError } from "../client";

export const getBountyByID = async (id:string) => {
    try {
      const response = await apiClient.get(`bounty/${id}`);
      return response.data;
    } catch (error:any) {
      return customError(503, `Error fetching data: ${error.message}`);
    }
};


export const getBountys = async () => {
  try {
    const response = await apiClient.get('bounty/all');
    return response.data;
  } catch (error:any) {
    return customError(503, `Error fetching data: ${error.message}`);
  }
};


export const submitBounty = async (id:string, data:any) => {
  try {
    const response = await apiClient.post(`bounty/submit/${id}`, data);
    return response.data;
  } catch (error:any) {
    return customError(503, `Error sending data: ${error.message}`);
  }
};


