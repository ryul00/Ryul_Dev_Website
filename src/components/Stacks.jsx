const Stacks = () => {
    const stackCategories = [
        {
            title: 'Languages',
            items: [
                { name: 'Java', color: '#007396' },
                { name: 'Python', color: '#3776AB' },
                { name: 'JavaScript', color: '#F7DF1E' },
                { name: 'HTML/CSS', color: '#E34F26' },
            ]
        },
        {
            title: 'Frameworks',
            items: [
                { name: 'Spring', color: '#6DB33F' },
                { name: 'React', color: '#61DAFB' },
                { name: 'Vue.js', color: '#4FC08D' },
            ]
        },
        {
            title: 'Database',
            items: [
                { name: 'MySQL', color: '#4479A1' },
                // { name: 'Oracle', color: '#F80000' },
                { name: 'PostgreSQL', color: '#4169E1' },
            ]
        },
        {
            title: 'Version Control',
            items: [
                { name: 'GitHub', color: '#181717' },
                { name: 'Git', color: '#F05032' },
            ]
        },
        {
            title: 'Cloud & DevOps',
            items: [
                { name: 'Amazon EC2', color: '#FF9900' },
                { name: 'Amazon S3', color: '#569A31' },
                { name: 'Vercel', color: '#000000' },
            ]
        },
        {
            title: 'File Management',
            items: [
                { name: 'Xftp', color: '#005BAB' },
            ]
        },
        {
            title: 'Tools',
            items: [
                { name: 'Eclipse IDE', color: '#2C2255' },
                { name: 'VS Code', color: '#007ACC' },
                { name: 'IntelliJ IDEA', color: '#000000' },
                { name: 'Antigravity', color: '#7B68EE' },
            ]
        },
    ];

    return (
        <section id="stacks">
            <div className="container">
                <h2 className="section-title">
                    <span>Stacks</span>
                </h2>
                <div className="stacks-grid">
                    {stackCategories.map((category, idx) => (
                        <div key={idx} className="stack-category">
                            <h3>{category.title}</h3>
                            <div className="stack-items">
                                {category.items.map((item, itemIdx) => (
                                    <span
                                        key={itemIdx}
                                        className="stack-badge"
                                        style={{ borderColor: `${item.color}40` }}
                                    >
                                        <span
                                            style={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                background: item.color
                                            }}
                                        ></span>
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stacks;
