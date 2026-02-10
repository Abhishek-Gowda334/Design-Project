"use client";

import { useState } from 'react';
import { MessageCircle, User, ThumbsUp, Send } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

export default function CommunityPage() {
    const [question, setQuestion] = useState('');
    const [posts, setPosts] = useState([
        {
            id: 1,
            author: 'Ramesh K.',
            role: 'Farmer',
            question: 'My tomato leaves are turning yellow with black spots. What should I do?',
            date: '2 hours ago',
            replies: 4,
            expertReply: {
                author: 'Dr. Anita (Agri Expert)',
                content: 'This looks like Early Blight. Remove infected leaves and apply copper fungicide.'
            }
        },
        {
            id: 2,
            author: 'Sarah J.',
            role: 'Urban Farmer',
            question: 'Best nutrient mix for hydroponic lettuce?',
            date: '5 hours ago',
            replies: 12,
            expertReply: null
        }
    ]);

    const handleSubmit = () => {
        if (!question.trim()) return;

        // Add new post locally
        const newPost = {
            id: Date.now(),
            author: 'You (Farmer)',
            role: 'Member',
            question: question,
            date: 'Just now',
            replies: 0,
            expertReply: null
        };

        setPosts([newPost, ...posts]);
        setQuestion('');
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Expert Community</h1>
                <p>Connect with experts and fellow farmers.</p>
            </header>

            {/* Question Input Section */}
            <Card className={styles.inputCard}>
                <div className={styles.inputHeader}>
                    <h3>Ask an Expert</h3>
                    <span className={styles.badge}>Priority</span>
                </div>
                <textarea
                    className={styles.textarea}
                    placeholder="Type your question here... e.g., 'Best time to harvest wheat?'"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    rows={3}
                />
                <div className={styles.inputActions}>
                    <p className={styles.helperText}>*Experts usually reply within 24 hours.</p>
                    <Button onClick={handleSubmit} disabled={!question.trim()}>
                        <Send size={16} /> Post Question
                    </Button>
                </div>
            </Card>

            <div className={styles.feed}>
                {posts.map(post => (
                    <Card key={post.id} className={styles.post}>
                        <div className={styles.postHeader}>
                            <div className={styles.authorInfo}>
                                <div className={styles.avatar}><User size={20} /></div>
                                <div>
                                    <span className={styles.authorName}>{post.author}</span>
                                    <span className={styles.authorRole}>{post.role}</span>
                                </div>
                            </div>
                            <span className={styles.date}>{post.date}</span>
                        </div>

                        <h3 className={styles.question}>{post.question}</h3>

                        {post.expertReply && (
                            <div className={styles.expertReply}>
                                <div className={styles.expertHeader}>
                                    <span className={styles.expertBadge}>Expert Answer</span>
                                    <span className={styles.expertName}>{post.expertReply.author}</span>
                                </div>
                                <p>{post.expertReply.content}</p>
                            </div>
                        )}

                        <div className={styles.actions}>
                            <Button variant="ghost" size="sm"><ThumbsUp size={16} /> Like</Button>
                            <Button variant="ghost" size="sm"><MessageCircle size={16} /> {post.replies} Replies</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
