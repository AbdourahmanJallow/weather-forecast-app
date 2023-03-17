
function Footer() {
    const today = new Date();
    return (
        <footer className='footer footer-center p-6 text-xl bg-neutral text-neutral-content'>
            <p>
                Copyright &copy; {today.getFullYear()} - All rights reserved.
            </p>
        </footer>
    )
}

export default Footer