const dbConnection = require('../database/connection');

class DepartmentController {
    constructor () {
        console.log('Department controller initialized');
    }



getDepartmentByName (DeptName){
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM BK_Department WHERE dept_name = ?';
        dbConnection.query(
            {
                sql: query,
                values: [DeptName]
            }, (err, res) => {
                if(err) {
                    reject(err);
                }
                resolve(res);
            });
        }).catch(err => {throw err;});
}


addDepartment (department) {
    return new Promise((resolve, reject) => {
        const query = `
            INSERT INTO BK_Department
            (dept_name, building, budget) VALUES
            (?, ?, ?)
        `;

        dbConnection.query(
            {
                sql: query,
                values: [department.dept_name, department.building, department.budget]
            }, (err, res) => {
                if(err) {
                    reject(err);
                }
                resolve(res);
        });
    }).catch(error => {throw error;});
}

getDeptBynamebuildbudget(department){
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM BK_Department WHERE dept_name = ? && building = ? && budget = ?';
        dbConnection.query(
            {
                sql: query,
                values: [department.dept_name, department.building, department.budget] 
            }, (err, res) => {
                if(err) {
                    reject(err);
                }
                resolve(res);
        });
    }).catch(error => {throw error;});

} 
}

module.exports = DepartmentController;