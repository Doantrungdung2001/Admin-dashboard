function IntroduceCafe({ store }) {
    return (
        <>
            <div className="modal-body">
                <h3 className="text-center">{store.introduction}</h3>
            </div>
        </>
    );
}

export default IntroduceCafe;
