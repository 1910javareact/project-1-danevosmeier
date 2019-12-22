import { fUserClient } from "./f-user-client";

export async function fRemoteReimbursement(userId: number) {
    try {
        const response = await fUserClient.get('reimbursement/author/userId/' + userId)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}

export async function fRemoteReimbursementByStatusId(statusId: number) {
    try {
        const response = await fUserClient.get('reimbursement/status/' + statusId)
        if (response.status === 200) {
            return {
                status: response.status,
                body: response.data
            }
        } else {
            return {
                status: response.status,
                body: undefined
            }
        }
    } catch (e) {
        console.log(e);
        throw new Error('Something Went Wrong')
    }
}