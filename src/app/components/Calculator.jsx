import CalculatorForm from "./CalculatorForm";
import Trail from "./Trail";

const Calculator = ({method, materials}) => {
    return ( 
        <Trail>
            <div className="header mb-12 text-center">
            <h2 className="font-bold text-5xl text-orange-600 dark:text-orange-300 text-center">Brew Calculator</h2>
            <p className="font-bold text-2xl text-red-600 dark:text-orange-300 text-center">Make the best {method}</p>
            </div>

            <CalculatorForm />
        </Trail>
     );
}
 
export default Calculator;