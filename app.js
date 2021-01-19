const demoController = new (require('./controller/demoController'))();
const studentController = new (require('./controller/studentController'))(); 
const departmentController = new (require('./controller/departmentController'))();

async function demo() {
    try {
        let result = await demoController.getDatabases();
        if(result.length > 0) {
            console.log("BK_ Tables Exist");
        }
        else{
            console.log("table does not exist");
        }
    } catch (err) {
        console.log(`You BK_ Tables might be missing!: ${err}`);
    }
}

async function demo_2(studentID) {
    try {
        let result = await studentController.getStudentById(studentID);
        if(result.length > 0){
            console.log(result);
        }
    } catch (e) {
        console.log(`You BK_students might be missing!: ${e}`);
    }
}

async function getStudentRecord(studentName) {
    try {
        let results = await studentController.getStudentByName(studentName);
        if(results.length > 0){
            for(let result of results){
                console.log(`Student Record for: ${result.ID} - ${result.name}`);
                console.log(`   Department: ${result.dept_name}`);
                let results_2 = await departmentController.getDepartmentByName(result.dept_name);
                for(let result2 of results_2){
                    console.log(`   Home Building: ${result2.building}`);
                }
                console.log(`    Total Credits: ${result.tot_cred}`);
            }
        }
    } catch (e) {
        console.log(`sql error : ${e}`);
    }
}

async function createDepartment(department){
    try{
        await departmentController.addDepartment(department);
        let results = await departmentController.getDeptBynamebuildbudget(department);
        //getdept by deptname, building and budget
        if(results.length > 0 )
            console.log(results);
    } catch (e){
        console.log(`sql error : ${e}`);
    }
}



(async function main() {
    let input = parseInt(process.argv[2]); // cast to int
    console.log(`Your input was: ${input}`);
    const data_input = {};
    const dept_object = {dept_name:"dept_name", building:"building",budget:"budget"};


    switch (input) {
        case 0:
            // Demo: Check for BK_ Tables in your database
            await demo();
            break;
        case 1:
            // Fetching Data
            let studentName = process.argv[3];
            let studentstring = studentName.toString();
            console.log(`Your argument was main: ${studentstring}`);
            await getStudentRecord(studentstring);
            break;
        case 2:
            dept_input_2= {dept_name: "nedp", building: "salazar", budget: 1000000000.00};
            console.log(`input ${dept_input_2}`);
            let data_output_2 = await createDepartment(dept_input_2);
            break;
        case 3:
            const data = process.argv[3];
            const obj = JSON.parse(data);
            console.log(`input ${obj}`);
            await createDepartment(obj);
            break;
        case 4:
            // Posting Data
            let department = process.argv[3];
            console.log(`Your argument was: ${department}`);
            break;
        case 5:
            //get studentby ID
            let studentID = parseInt(process.argv[3]);
            console.log(`Your argument was: ${studentID}`);
            var x = await demo_2(studentID);
            console.log(x);
            break;
        default:
            console.log("Connection Successful: Welcome to HW3!");
            break;
    }

    process.exit(0);
})();