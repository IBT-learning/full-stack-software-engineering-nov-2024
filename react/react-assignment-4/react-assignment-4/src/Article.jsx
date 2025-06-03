import { useLocation, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";
import './Article.css'; // Create this CSS file

const Article = () => {
    const [article, setArticle] = useState({
        title: '',
        description: '',
        ingredients: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { state } = useLocation();
    const navigate = useNavigate();

    // Destructure with default values to prevent errors
    const { iD } = state || {};

    useEffect(() => {
        if (!iD) {
            setError("No article ID provided");
            setLoading(false);
            return;
        }

        const getArticle = async () => {
            try {
                const response = await fetch(`http://localhost:4000/posts/${iD}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                setArticle(result);
            } catch (err) {
                setError(err.message);
                console.error("Fetch error:", err.message);
            } finally {
                setLoading(false);
            }
        };

        getArticle();
    }, [iD]);

    if (loading) {
        return (
            <div className="article-container">
                <div className="loading-spinner">Loading article...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="article-container">
                <div className="error-message">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="article-container">
            <header className="article-header">
                <button
                    className="back-button"
                    onClick={() => navigate(-1)}
                    aria-label="Go back"
                >
                    <IoMdArrowRoundBack size={24} />
                </button>
                <h1 className="article-title">{article.title}</h1>
            </header>

            <main className="article-content">
                {article.description && (
                    <section className="description-section">
                        <h2>Description</h2>
                        <p>{article.description}</p>
                    </section>
                )}

                {article.ingredients?.length > 0 && (
                    <section className="ingredients-section">
                        <h2>Ingredients</h2>
                        <ul className="ingredients-list">
                            {article.ingredients.map((item, index) => (
                                <li key={index.toString()}>{item}</li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>
            <button className="footer-btn" onClick={() => {
                navigate("/edit", {state: {article}}); // Add leading slash
            }}>
                Edit
            </button>
        </div>
    );
};

export default Article;