import React, {useState} from 'react'
import { FaCheck } from 'react-icons/fa';


export default function Transfers() {

    return (
        <div className="transfers">
            <h4>Количество пересадок</h4>

            <div className="transfersFilter">
                <div className="transfer">
                    <form className="filterForm">
                        <div className="transferFilterItem">
                            <div className="checkbox">
                                <input 
                                    id={1} 
                                    type="checkbox" 
                                />
                                <label htmlFor={1}>
                                    <FaCheck />
                                </label>
                            </div>
                            <div className="tranferText">
                                Все
                            </div>
                        </div>
                        <div className="transferFilterItem">
                            <div className="checkbox">
                                <input 
                                    id={2} 
                                    type="checkbox" 
                                />
                                <label htmlFor={2}>
                                    <FaCheck />
                                </label>
                            </div>
                            <div  className="tranferText">
                                Без пересадок
                            </div>
                        </div>
                    </form>
            
                </div>
            </div>
        </div>
    )
}
