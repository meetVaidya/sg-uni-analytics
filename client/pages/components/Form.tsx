import { useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [formData, setFormData] = useState({
        university: '',
        school: '',
        degree: '',
        employmentRate: null,
    });

    const [employmentRate, setEmploymentRate] = useState<number | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:8080/predict',
                formData
            );
            setEmploymentRate(response.data.employment_rate);
            console.log(response.data.employment_rate);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
            <form
                onSubmit={handleSubmit}
                className="mx-auto flex w-full max-w-md flex-col gap-4 rounded-md border p-4"
            >
                <input
                    type="text"
                    name="university"
                    placeholder="University"
                    value={formData.university}
                    onChange={(e) =>
                        setFormData({ ...formData, university: e.target.value })
                    }
                    className="rounded-md border p-2"
                />
                <input
                    type="text"
                    name="school"
                    placeholder="School"
                    value={formData.school}
                    onChange={(e) =>
                        setFormData({ ...formData, school: e.target.value })
                    }
                    className="rounded-md border p-2"
                />
                <input
                    type="text"
                    name="degree"
                    placeholder="Degree"
                    value={formData.degree}
                    onChange={(e) =>
                        setFormData({ ...formData, degree: e.target.value })
                    }
                    className="rounded-md border p-2"
                />
                <button
                    type="submit"
                    className="rounded-md bg-black px-4 py-2 text-white hover:bg-gray-800"
                >
                    Predict Employment Rate
                </button>
            </form>
            {employmentRate !== null && (
                <p className="mt-4">
                    Predicted Employment Rate: {employmentRate}
                </p>
            )}
        </div>
    );
}
