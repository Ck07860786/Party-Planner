import React from 'react'

function AddCategoryform({handleSubmit,value,setValue}) {
  return (
    <> 
    <form onSubmit={handleSubmit}>
        <div className="mt-6 flex w-full gap-x-4 py-4">
              <label htmlFor="email-address" className="sr-only">
                Categoty
              </label>
              <input
                id="category"
                name="category"
                type="text"
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                
                
                autoComplete="off"
                required
                className=" flex-auto rounded-md  border border-purple-600 bg-black px-3.5 py-2  text-white outline-none hover:border-blue-600 shadow-sm sm:text-sm  sm:leading-6"
                placeholder="Add new category"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Add
              </button>
            </div>
            </form>
    </>
  )
}

export default AddCategoryform