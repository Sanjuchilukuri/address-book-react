import ContactListCss from './ContactList.module.scss';

function ContactsList() {
  return (
    <aside className={`border border-2 ${ContactListCss['aside']}`}>
        <div className='p-2 border-bottom border-2'>
          <p className='h2 fw-lighter'>Chandermani Arora</p>
          <div className='pt-1 px-2'>
            <p>chandermani@tezo.com</p>
            <p>+91 9292992922</p>
          </div>
        </div>

        <div className='p-2 border-bottom border-2'>
          <p className='h2 fw-lighter'>Chandermani Arora</p>
          <div className='pt-1 px-2'>
            <p>chandermani@tezo.com</p>
            <p>+91 9292992922</p>
          </div>
        </div>
        
        <div className='p-2 border-bottom border-2'>
          <p className='h2 fw-lighter'>Praveen Battlua</p>
          <div className='pt-1 px-2'>
            <p>vijay@tezo.com</p>
            <p>+91 9292992922</p>
          </div>
        </div>
        
        <div className='p-2 border-bottom border-2'>
          <p className='h2 fw-lighter'>Chandermani Arora</p>
          <div className='pt-1 px-2'>
            <p>chandermani@tezo.com</p>
            <p>+91 9292992922</p>
          </div>
        </div>
        
        
    </aside>
  )
}

export default ContactsList