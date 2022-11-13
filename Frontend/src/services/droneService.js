import { BACKEND_URL } from "./constants";
import { BACKEND_PORT } from "./constants";
export const fetchDroneListFromDB = async type => {
    
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }
    const response = await fetch(`${BACKEND_URL}:${BACKEND_PORT}/drone/getDronesByType?type=${type}`, options);
    const status = response.status;
    const data = await response.json();
    return {status, data};
};
export const fetchDroneListFromDBForOwner = async (userId) => {
    
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }
    const response = await fetch(`${BACKEND_URL}:${BACKEND_PORT}/drone/getDronesByOwner?ownerId=${userId}`, options);
    const status = response.status;
    const data = await response.json();
    return {status, data};
};

export const addDrone = async (drone, user) => {
    const payload = {
        ...drone,
        ownerId: user.userId,
        available:1,
    }
    console.log(payload);
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    }
    const response = await fetch(`${BACKEND_URL}:${BACKEND_PORT}/drone/add`, options);
    const status = response.status;
    const data = await response.json();
    return {status, data};
}