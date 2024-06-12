
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Plan from './Plan';
import { useNavigate } from 'react-router-dom';
import './Plans.css'
import Header from '../Header'
import Footer from '../Footer'


const Plans = () => {
    const history = useNavigate();
    const plansData = [
        {
          id: 1,
          fitness_goal: 'weight loss',
          age: '40',
          weight: '70',
          height:"5'4",
          generated_date: 'some date, time',
        },
        {
          id: 2,
          fitness_goal: 'weight loss',
          age: '40',  
          weight: '70',
          height:"5'2",
          generated_date: 'some date, time',
        },
        {
            id: 1,
            fitness_goal: 'weight loss',
            age: '40',
            weight: '70',
            height:"5'10",
            generated_date: 'some date, time',
          },
          {
            id: 2,
            fitness_goal: 'weight loss',
            age: '40',
            weight: '70',
            height:"5'5",
            generated_date: 'some date, time',
          },
          {
            id: 1,
            fitness_goal: 'weight loss',
            age: '40',
            weight: '70',
            height:"5'10",
            generated_date: 'some date, time',
          },
          {
            id: 2,
            fitness_goal: 'weight loss',
            age: '40',
            weight: '70',
            height:"5'10",
            generated_date: 'some date, time',
          },
          {
            id: 1,
            fitness_goal: 'weight loss',
            age: '40',
            weight: '70',
            height:"5'10",
            generated_date: 'some date, time',
          },
          {
            id: 2,
            fitness_goal: 'weight loss',
            age: '40',
            weight: '70',
            height:"5'10",
            generated_date: 'some date, time',
          },
          {
            id: 1,
            fitness_goal: 'weight loss',
            age: '40',
            weight: '70',
            height:"5'10",
            generated_date: 'some date, time',
          },
          {
            id: 2,
            fitness_goal: 'weight loss',
            age: '40',
            weight: '70',
            height:"5'10",
            generated_date: 'some date, time',
          },
        // Add more plans as needed
      ];

      const [selectedPlanId, setSelectedPlanId] = useState(null);

    const handleRowClick = (planId) => {
    
        history('/plan?id=${planId}');
    };

    return ( 
            <>
            <Header />

            <div className='content'>
                <div className="container mb-10 mt-10">
                
                    <h2 className="m-5 text-center text-primary-gradient fw-medium animated slideInDown p-4 rounded border-primary bg-cust">All Plans</h2>

                    <div className="table-responsive animated slideInDown">
                        
                    <table className="table custom-table table-hover animated">
                    <thead>
                    <tr>
                        
                        <th scope="col"><h3 className='font-weight-bold'>Id</h3></th>
                        <th scope="col"><h3 className='font-weight-bold'>Fitness Goal</h3></th>
                        <th scope="col"><h3 className='font-weight-bold'>Age</h3></th>
                        <th scope="col"><h3 className='font-weight-bold'>Weight</h3></th>
                        <th scope="col"><h3 className='font-weight-bold'>Height</h3></th>
                        <th scope="col"><h3 className='font-weight-bold'>Generated Date</h3></th>
                    </tr>
                    </thead>
                    <tbody>
                        
                    {plansData.map((plan) => (
                        <tr key={plan.id} onClick={() => handleRowClick(plan.id)} className='pe-auto'>
                        <td>{plan.id}</td>
                        <td>{plan.fitness_goal}</td>
                        <td>{plan.age}</td>
                        <td>{plan.weight}</td>
                        <td>{plan.height}</td>
                        <td>{plan.generated_date}</td>
                        </tr>
                    ))}


                        {/* <tr >
                                                
                                                <td>1</td>
                                                <td>Weight Loss</td>
                                                <td>
                                                <small className="d-block">60</small>
                                                </td>
                                                <td>
                                                <small className="d-block">70</small>
                                                </td>
                                                <td>{new Date().toLocaleString() + ""}</td>
                                                
                                                
                        </tr>
                        <tr >
                                                
                                                <td>2</td>
                                                <td>Weight Loss</td>
                                                <td>
                                                <small className="d-block">60</small>
                                                </td>
                                                <td>
                                                <small className="d-block">70</small>
                                                </td>
                                                <td>{new Date().toLocaleString() + ""}</td>
                                                
                                                
                                            </tr>
                                            <tr>
                                                
                                                <td>3</td>
                                                <td>Weight Loss</td>
                                                <td>
                                                <small className="d-block">60</small>
                                                </td>
                                                <td>
                                                <small className="d-block">70</small>
                                                </td>
                                                <td>{new Date().toLocaleString() + ""}</td>
                                                
                                                
                                            </tr>
                                            <tr >
                                                
                                                <td>4</td>
                                                <td>Weight Loss</td>
                                                <td>
                                                <small className="d-block">60</small>
                                                </td>
                                                <td>
                                                <small className="d-block">70</small>
                                                </td>
                                                <td>{new Date().toLocaleString() + ""}</td>
                                                
                                                
                                            </tr>

                                            <tr >
                                                
                                                <td>5</td>
                                                <td>Weight Loss</td>
                                                <td>
                                                <small className="d-block">60</small>
                                                </td>
                                                <td>
                                                <small className="d-block">70</small>
                                                </td>
                                                <td>{new Date().toLocaleString() + ""}</td>
                                                
                                                
                                            </tr>
                            


                        
                    
                    Additional rows go here */}
                    </tbody>
                </table>


                {selectedPlanId && <Plan planId={selectedPlanId}/>}


                </div>
            </div>

        </div>
        

            <Footer />
            </>
     );
}
 
export default Plans;