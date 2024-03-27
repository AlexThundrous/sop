export default function ApplicationCard({ comments, justification, date, student_id, project_id, cg }) {
    return (
        <div className="flex flex-col mt-4 w-[60%] h-[40%] justify-start bg-gray-100 text-black relative overflow-hidden">
            <div className="flex"><h1 className="font-black text-xl">{comments}</h1><h1 className="ml-auto font-semibold mr-2">{student_id} &nbsp; CG:{cg} </h1></div>
            <div className="mt-4 font-bold" style={{ WebkitBoxOrient: 'vertical' }}>
                <p className="line-clamp-3">{justification}</p>
            </div>
            <div className="absolute bottom-[-0.5] left-[-0.5] w-full h-full bg-gradient-to-b from-transparent to-gray-100 pointer-events-none"></div>
        </div>
    );
}
