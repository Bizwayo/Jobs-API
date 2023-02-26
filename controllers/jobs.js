const User = require('../models/User');

const getAllJobs = async (req,res) => {
    res.json(req.user);
}


const getJob = async (req,res) => {
    res.send('get job');
}


const createJob = async (req,res) => {
    console.log("Creating Job")
    res.json(req.user);
}

const updateJob = async (req,res) => {
    res.send('update job');
}


const deleteJob = async (req,res) => {
    res.send('delete job');
}

module.exports = {
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
};