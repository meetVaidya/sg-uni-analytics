import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [formData, setFormData] = useState({
        university: '',
        school: '',
        degree: '',
        employmentRate: null,
        yearly_basic_salary: null,
    });

    const [employmentRate, setEmploymentRate] = useState<number | null>(null);
    const [yearlySalary, setYearlySalary] = useState<number | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8080/predict',
                formData
            );
            setEmploymentRate(response.data.employment_rate);
            setYearlySalary(response.data.yearly_basic_salary);
            console.log(response.data.employment_rate);
            console.log(response.data.yearly_salary);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mx-auto flex flex-col items-center justify-center p-4">
            {/* <h1 className="text-3xl font-mono pb-5 text-white font-extrabold">
                Predict Employment Rate
            </h1> */}
            <form
                onSubmit={handleSubmit}
                className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-md"
            >
                <input
                    type="text"
                    name="university"
                    placeholder="University"
                    value={formData.university}
                    onChange={(e) =>
                        setFormData({ ...formData, university: e.target.value })
                    }
                    className="font-mono bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <input
                    type="text"
                    name="school"
                    placeholder="School"
                    value={formData.school}
                    onChange={(e) =>
                        setFormData({ ...formData, school: e.target.value })
                    }
                    className="font-mono bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <input
                    type="text"
                    name="degree"
                    placeholder="Degree"
                    value={formData.degree}
                    onChange={(e) =>
                        setFormData({ ...formData, degree: e.target.value })
                    }
                    className="font-mono bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="font-mono text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
                >
                    Predict
                </button>
            </form>

            {employmentRate !== null && (
                <p className="mt-4 font-mono text-white font-semibold">
                    Predicted Employment Rate: {employmentRate.toFixed(2) + '%'}
                </p>
            )}
            {yearlySalary !== null && (
                <p className="mt-4 font-mono text-white font-semibold">
                    Predicted Yearly Salary:{' '}
                    {(yearlySalary * 12).toFixed(2) + ' SGD'}
                </p>
            )}
        </div>
    );
}
