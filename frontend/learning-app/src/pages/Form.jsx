function Form() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:');
    };

    return (
        <div>
            <h1>Create a wordlist</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Form;