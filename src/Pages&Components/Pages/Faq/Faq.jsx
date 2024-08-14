

const Faq = () => {
    return (
        <section className="bg-white h-screen text-gray-900 pt-24">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-bold tracking-wider text-[#82CB15] lg:pt-10 text-center uppercase">
                How it works
                </p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
                Frequently Asked Questions
                </h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                <details>
                    <summary className="py-2 outline-none cursor-pointer ">
                    What is a Hospital Dashboard?
                    </summary>
                    <div className="px-4 pb-4">
                    <p>
                        A ToDo app is a task management tool that helps you organize and prioritize your tasks and activities. It allows you to create, edit, and delete tasks, set deadlines, and track your progress.
                    </p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer ">
                        How do I create a new appoinment?
                    </summary>
                    <div className="px-4 pb-4">
                    <p>
                    To create a new task, follow these steps:

                        a.Click on the "Add Task" button.
                        b.Fill in the task details, such as the title, description, and due date.
                        c.Click "Save" to add the task to your list.
                    </p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer ">
                    Can I make a reservation, and do you accept walk-ins?
                    </summary>
                    <div className="px-4 pb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                        neque in fugiat magni, quas animi enim veritatis deleniti ex.
                        Impedit.
                    </p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer ">
                    Is it possible to categorize tasks?
                    </summary>
                    <div className="px-4 pb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                        aspernatur quae, eos explicabo odit minima libero veniam
                        similique quibusdam doloribus facilis ipsa accusantium vel
                        maiores corrupti! Libero voluptate a doloribus?
                    </p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer ">
                    Can I edit a task after creating it?
                    </summary>
                    <div className="px-4 pb-4 space-y-2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                        voluptates aspernatur dolores in consequatur doloremque
                        inventore reprehenderit, consequuntur perspiciatis architecto.
                    </p>
                    <p>
                        Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                        veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                        autem eaque unde possimus quae.
                    </p>
                    </div>
                </details>
                <details>
                    <summary className="py-2 outline-none cursor-pointer ">
                    How do I mark a task as completed?
                    </summary>
                    <div className="px-4 pb-4 space-y-2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                        voluptates aspernatur dolores in consequatur doloremque
                        inventore reprehenderit, consequuntur perspiciatis architecto.
                    </p>
                    <p>
                        Sed consectetur quod tenetur! Voluptatibus culpa incidunt
                        veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus
                        autem eaque unde possimus quae.
                    </p>
                    </div>
                </details>
                </div>
            </div>
        </section>
    );
};

export default Faq;