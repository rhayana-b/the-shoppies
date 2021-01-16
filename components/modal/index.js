const Modal = ({ open, onClose, alertMessage }) => (
  <>
    {open ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-md">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-center p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-2xl font-semibold">Modal Title</h3>
              </div>

              <div className="relative p-y4 px-6 flex-auto">
                <p className="my-4 text-gray-600 text-lg leading-relaxed">
                  {alertMessage}
                </p>
              </div>
              <div className="flex items-center justify-center py-2 px-4 border-t border-solid border-gray-300 rounded-b">
                <button
                  className="text-purple-900 bg-transparent font-bold uppercase px-4 py-2 text-md outline-none focus:outline-none hover:text-black mb-1"
                  type="button"
                  style={{ transition: 'all .15s ease' }}
                  onClick={onClose}
                >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black" />
      </>
    ) : null}
  </>
);

export default Modal;
