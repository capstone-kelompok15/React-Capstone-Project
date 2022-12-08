import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import emptyInvoiceLogo from '../../assets/svg/emptyInvoiceLogo.svg'
import { getSearchValue } from "../../redux/reducers/invoicesSlice";

const NoInvoices = () => {
    const searchValue = useSelector(getSearchValue);

    return(
        <Container fluid className='p-0' style={{height: 'calc(100vh - 150px)'}}>
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <img src={emptyInvoiceLogo} alt={'Not Found'}/>
                <div className="no-invoices-text">
                    {searchValue !== '' ? "No invoice were found"
                    : 
                    "There is no invoice right now, click new invoices above to create one"}
                </div>
            </div>
        </Container>
    )
}

export default NoInvoices;