import React from 'react'
import './CounterComponent.css';

function CounterComponent() {

  return (
    <div className='body'>
        <h2 >Name: Balsreeram.K</h2>
        <h4>BE Computer Science Engineering</h4>
        <h3>CONTACT</h3>
        <p>Address : *************** chennai <br></br>Phone number:+91********* <br></br>E-mail:******@gmail.vom <br></br></p>
        <h3>TECHNICAL PROFILE:</h3>
       <dl><dt>Programming Languages:</dt>
        <dd>Java,C,C++,Python,HTML and CSS,Javascript,SQL.</dd><br></br>
        <dt>Platform and frameworks:</dt>
        <dd>Windows,Linux,Mac.</dd><br></br>
        <dt>Known Language:</dt>
        <dd>English,Tamil,German(learning).</dd></dl>
        
      
        <h3>INTERNSHIP EXPERIENCE:</h3>
             <p>organization:  Zybeak Technologies</p>
             <p>Duration    :  4 Months</p>
             <p>Project     :  Ethical Hacking(capture the flag)</p>

        <table border='2px' align='center'>
          <tr>
            <th>Course</th>
            <th>Year of Graduation</th>
            <th>College/University</th>
            <th>Grades</th>
          </tr>
          <tr >
                <td >BE (computer Science Engineering)</td>
                <td>2025</td>
                <td>Saveetha engineering college</td>
                <td>....</td>
                </tr>
                <tr >
                    <td >Senior Secondary School(class XII)</td>
                    <td>2021</td>
                    <td>chinmaya vidyalaya</td>
                    <td>79%</td>
                    </tr>
                    <tr >
                        <td>Secondary School(class X)</td>
                        <td>2019</td>
                        <td>A.V.M Rajeshwari</td>
                        <td>75%</td>
                        </tr>
        </table><br></br><br></br>
    </div>
  )
}

export default CounterComponent