const useDelete=()=>{
    const handleDelete=(user, refetch, toast)=>{
        fetch(`http://localhost:5000/users/${user._id}`,{
            method:'DELETE',
           
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.deletedCount >0) {
                refetch()
                toast.success(`${user.name} deleted successfully`)
            }
        })
    }
    return handleDelete
}
export default useDelete;