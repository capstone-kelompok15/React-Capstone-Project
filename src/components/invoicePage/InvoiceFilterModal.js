import { useState } from "react";
import { Container } from "react-bootstrap";

const InvoiceFilterModal = (props) => {
    const {onClick} = props;
    const [ filterValue, setFilterValue ] = useState('All');

    const onChange = (e) => {
        setFilterValue(e.target.value);
    }

    const resetOnPressed = () => {
        setFilterValue('All');
    }

    return(
        <>
            <div className="modal-test" onClick={onClick}/>
            <Container className="filter-modal-container">
                <div className='d-flex flex-column justify-content-start align-items-start w-100 h-100'>
                    <div className="d-flex flex-row justify-content-between align-items-center w-100">
                        <div className="invoice-modal-filter-text">Filter</div>
                        <div className="invoice-modal-reset-text-button" onClick={resetOnPressed}>Reset</div>
                    </div>
                    <div className="invoice-modal-border"/>
                    <div onChange={onChange}>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="All" checked={filterValue === 'All'}/>
                            <label className="form-check-label invoice-modal-label-text" for="radio1">All</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio2" name="optradio" value="Paid" checked={filterValue === 'Paid'}/>
                            <label className="form-check-label invoice-modal-label-text" for="radio2">Paid</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" className="form-check-input" id="radio3" name="optradio" value="Unpaid" checked={filterValue === 'Unpaid'}/>
                            <label className="form-check-label invoice-modal-label-text" for="radio3">Unpaid</label>
                        </div>
                    </div>
                </div>
                <div className="modal-filter-submit-button">
                    Show Result
                </div>
            </Container>
        </>
    );
}

export default InvoiceFilterModal;