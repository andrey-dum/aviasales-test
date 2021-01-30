import React, {useState} from 'react'
import { FaCheck } from 'react-icons/fa';

export default function Sidebar({filter, handleChange}) {
   
    return (
        <div className="sidebar">
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
                                    name="all"
                                    onChange={handleChange}
                                    checked={filter.all}
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
                                    name="without"
                                    onChange={handleChange}
                                    checked={filter.without}
                                />
                                <label htmlFor={2}>
                                    <FaCheck />
                                </label>
                            </div>
                            <div  className="tranferText">
                                Без пересадок
                            </div>
                        </div>
                        <div className="transferFilterItem">
                            <div className="checkbox">
                                <input 
                                    id={3} 
                                    type="checkbox"
                                    name="one"
                                    onChange={handleChange}
                                    checked={filter.one}
                                />
                                <label htmlFor={3}>
                                    <FaCheck />
                                </label>
                            </div>
                            <div  className="tranferText">
                                1 пересадка
                            </div>
                        </div>
                    </form>
            
                </div>
            </div>
        </div>
        </div>
    )
}
