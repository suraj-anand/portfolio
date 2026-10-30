import { useState, useMemo } from 'react'
import { ALL_SKILLS, CATEGORY_TABS } from 'data/skillsData'


function Skills() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return ALL_SKILLS
    return ALL_SKILLS.filter(skill => skill.group === activeCategory)
  }, [activeCategory])

  return (
    <section id="skills" className="skills-section">
      <div className="skills-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>

      <div className="container">
        {/* Modern Section Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-eyebrow mono">// TECHNICAL CAPABILITIES</span>
          <h2 className="section-title">Core Skills & Tech Stack</h2>
          <div className="title-underline"></div>
        </div>

        {/* Category Filters Bar */}
        <div className="skills-filter-nav" data-aos="fade-up" data-aos-delay="100">
          <div className="skills-pills-bar">
            {CATEGORY_TABS.map((tab) => {
              const count = tab.id === 'all'
                ? ALL_SKILLS.length
                : ALL_SKILLS.filter(s => s.group === tab.id).length
              const isActive = activeCategory === tab.id

              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`skills-filter-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveCategory(tab.id)}
                >
                  <span>{tab.label}</span>
                  <span className="filter-count mono">{count}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Modern Glass Skill Grid */}
        <div className="skills-modern-grid">
          {filteredSkills.map((skill, index) => (
            <div
              className={`skill-glass-card ${skill.highlight ? 'is-highlight' : ''}`}
              key={skill.name}
              data-aos="fade-up"
              data-aos-delay={(index % 6) * 60}
            >
              <div className="skill-logo-frame">
                <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo-img" loading="lazy" />
              </div>

              <div className="skill-meta">
                <h3 className="skill-name">{skill.name}</h3>
                <span className="skill-category-pill mono">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
