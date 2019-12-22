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

export async function fRemoteUpdateReimbursement(reimbursementId: number, author:number, amount:number, dateSubmitted:number, dateResolved:number, description:string, resolver:number, status: number, type:number) {
    const fields = {
        reimbursementId,
        author,
        amount,
        dateSubmitted,
        dateResolved,
        description,
        resolver,
        status,
        type,
    }
    try {
        let response = await fUserClient.patch('/reimbursements', fields)
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

export async function fRemoteSubmitReimbursement(author:number, amount:number, dateSubmitted:number, dateResolved:number, description:string, resolver:number, status: number, type:number) {
    const fields = {
        author: 0,
        amount: amount,
        dateSubmitted: 0,
        dateResolved: 0,
        description: '',
        resolver: 0,
        status: 0,
        type: 0,
    }
    try {
        let response = await fUserClient.post('/reimbursements', fields)
        if (response.status === 201) {
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