import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Activity, Zap, Heart, MessageCircle, Mail, Phone } from 'lucide-react';
import './index.css';

import mtb2Basic from '../images/MTB2-BASIC.png';
import mtb2_4 from '../images/MTB2-4.png';
import mtb4000 from '../images/MBT4000.png';
import campoEnvolvente from '../images/CAMPO_ENVOLVENTE.png';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);





  const bloomIn = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0.01, 
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const heroBloom = {
    hidden: { opacity: 0, y: 45 },
    visible: { 
      opacity: 1, 
      y: 0.01, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const heroStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <>
      {/* ── Loading Overlay (fades out, content is ALWAYS underneath) ── */}
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            key="loader"
            className="loading-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div className="hero-bg-glow" style={{ animationDuration: '3s' }}></div>
            <motion.div 
              className="loader-content"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1.001 }}
              transition={{ duration: 0.5 }}
            >
              <div className="premium-spinner"></div>
              <p className="loader-text">CARGANDO DATOS...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── App Content (ALWAYS in the DOM) ── */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">Magnetoterapia <span style={{ color: 'var(--accent)' }}>Web</span></div>
          <ul className="nav-links">
            <li><a href="#beneficios">Beneficios</a></li>
            <li><a href="#equipos">Equipos</a></li>
            <li><a href="#contacto">Contacto</a></li>
            <li><a href="#contacto" className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>Alquilar Ahora</a></li>
          </ul>
        </div>
      </nav>

      <section id="inicio" className="section hero">
        <div className="hero-bg-glow"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={heroStagger}
          >
            <motion.h1 variants={heroBloom}>
              Alquiler de Equipos Profesionales de <span style={{ color: 'var(--accent)' }}>Magnetoterapia</span>
            </motion.h1>
            <motion.p variants={heroBloom}>
              Tratamiento efectivo y no invasivo para dolor crónico, lesiones deportivas y recuperación post-operatoria. Equipos de alta potencia ahora disponibles para uso domiciliario.
            </motion.p>
            <motion.div className="hero-buttons" variants={heroBloom}>
              <a href="#contacto" className="btn btn-primary">Consultar Alquiler</a>
              <a href="#equipos" className="btn btn-outline">Ver Equipos</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="beneficios" className="section section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={bloomIn}>Beneficios del Tratamiento</motion.h2>
            <div className="grid-3">
              <motion.div className="glass-card" variants={bloomIn} whileHover={{ y: -6 }}>
                <Heart size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                <h3>Alivio del Dolor</h3>
                <p>Efectivo para dolor crónico, artritis, fibromialgia, dolor de espalda, cervical y lumbar. Reduce la inflamación de forma natural.</p>
              </motion.div>
              
              <motion.div className="glass-card" variants={bloomIn} whileHover={{ y: -6 }}>
                <Activity size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                <h3>Recuperación Acelerada</h3>
                <p>Ideal para fracturas, esguinces, lesiones musculares y post-operatorios. Estimula la regeneración ósea y de tejidos blandos.</p>
              </motion.div>
              
              <motion.div className="glass-card" variants={bloomIn} whileHover={{ y: -6 }}>
                <Zap size={40} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                <h3>Mejora la Circulación</h3>
                <p>Tratamiento para problemas circulatorios, edemas, úlceras venosas y várices. Optimiza el flujo sanguíneo y la oxigenación celular.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="equipos" className="section">
        <div className="container">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bloomIn}
          >
            Nuestros Equipos
          </motion.h2>
          
          <div className="grid-4">
            {/* Equipo 1 */}
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0.01 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="equipment-image-placeholder">
                <img src={mtb2Basic} alt="MTB2-BASIC" />
              </div>
              <h3>MTB2-BASIC</h3>
              <p>Equipo profesional de alto rendimiento con potencia máxima de 200 gauss. Ideal para tratamientos localizados en articulaciones y zonas específicas.</p>
              <ul className="features-list">
                <li><CheckCircle2 size={18} /> 2 salidas independientes</li>
                <li><CheckCircle2 size={18} /> Incluye 2 bobinas planas</li>
                <li><CheckCircle2 size={18} /> Emisión continua</li>
              </ul>
              <a href="#contacto" className="btn btn-outline" style={{ width: '100%' }}>Consultar</a>
            </motion.div>

            {/* Equipo 2 */}
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0.01 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="equipment-image-placeholder">
                <img src={mtb2_4} alt="MTB2/4" />
              </div>
              <h3>MTB2/4</h3>
              <p>Magnetoterapia de baja frecuencia y alta potencia con 4 salidas. Perfecto para tratamientos integrales y zonas amplias del cuerpo.</p>
              <ul className="features-list">
                <li><CheckCircle2 size={18} /> 4 salidas: 5-200 Gauss</li>
                <li><CheckCircle2 size={18} /> Emisión continua y pulsante</li>
                <li><CheckCircle2 size={18} /> 2 bobinas planas + 1 envolvente</li>
              </ul>
              <a href="#contacto" className="btn btn-outline" style={{ width: '100%' }}>Consultar</a>
            </motion.div>

            {/* Equipo 3 */}
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0.01 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="equipment-image-placeholder">
                <img src={mtb4000} alt="MTB4000" />
              </div>
              <h3>MTB4000</h3>
              <p>Equipo profesional de máxima potencia con salida auxiliar para bobina corporal. La solución más completa para tratamientos intensivos.</p>
              <ul className="features-list">
                <li><CheckCircle2 size={18} /> Salida para bobina corporal</li>
                <li><CheckCircle2 size={18} /> 3 frecuencias y formas de onda</li>
                <li><CheckCircle2 size={18} /> Máxima versatilidad terapéutica</li>
              </ul>
              <a href="#contacto" className="btn btn-outline" style={{ width: '100%' }}>Consultar</a>
            </motion.div>

            {/* Equipo 4 */}
            <motion.div 
              className="glass-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0.01 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="equipment-image-placeholder">
                <img src={campoEnvolvente} alt="Bobina de Campo Envolvente" />
              </div>
              <h3>Bobina Envolvente</h3>
              <p>Accesorio especializado para tratamientos en extremidades completas. Envuelve rodillas, tobillos o codos con un campo de 360 grados.</p>
              <ul className="features-list">
                <li><CheckCircle2 size={18} /> Cobertura completa</li>
                <li><CheckCircle2 size={18} /> Ideal para articulaciones</li>
                <li><CheckCircle2 size={18} /> Compatible con MTB2/4 y 4000</li>
              </ul>
              <a href="#contacto" className="btn btn-outline" style={{ width: '100%' }}>Consultar</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN REMATADORA ─────────────────────────── */}
      <section className="section-alt">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.h2 variants={bloomIn}>¿Por Qué Alquilar?</motion.h2>
            <motion.p variants={bloomIn} style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.1rem', lineHeight: '1.75' }}>
              Los equipos profesionales de magnetoterapia pueden costar miles de dólares. El alquiler te da acceso a la misma tecnología de clínica sin la inversión.
            </motion.p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
              <motion.div className="glass-card" variants={bloomIn} style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{ fontSize: '2.8rem', fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>$0</div>
                <p style={{ color: 'var(--text-main)', fontWeight: 500, fontSize: '0.95rem', marginBottom: '0.35rem' }}>Inversión Inicial</p>
                <p style={{ fontSize: '0.82rem', marginBottom: 0 }}>Sin compra, sin compromiso a largo plazo</p>
              </motion.div>

              <motion.div className="glass-card" variants={bloomIn} style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{ fontSize: '2.8rem', fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>24hs</div>
                <p style={{ color: 'var(--text-main)', fontWeight: 500, fontSize: '0.95rem', marginBottom: '0.35rem' }}>Entrega Rápida</p>
                <p style={{ fontSize: '0.82rem', marginBottom: 0 }}>Coordinamos la entrega en tu domicilio</p>
              </motion.div>

              <motion.div className="glass-card" variants={bloomIn} style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{ fontSize: '2.8rem', fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>200G</div>
                <p style={{ color: 'var(--text-main)', fontWeight: 500, fontSize: '0.95rem', marginBottom: '0.35rem' }}>Alta Potencia</p>
                <p style={{ fontSize: '0.82rem', marginBottom: 0 }}>Equipos de grado clínico, no domésticos</p>
              </motion.div>

              <motion.div className="glass-card" variants={bloomIn} style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
                <div style={{ fontSize: '2.8rem', fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>100%</div>
                <p style={{ color: 'var(--text-main)', fontWeight: 500, fontSize: '0.95rem', marginBottom: '0.35rem' }}>Soporte Incluido</p>
                <p style={{ fontSize: '0.82rem', marginBottom: 0 }}>Asesoramiento y asistencia técnica</p>
              </motion.div>
            </div>

            <motion.div variants={bloomIn} style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto' }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: 'var(--text-main)', fontWeight: 300, lineHeight: 1.5, letterSpacing: '-0.01em', marginBottom: '0.75rem' }}>
                "Trátese desde su casa, con la misma tecnología que usan los profesionales."
              </p>
              <p style={{ fontSize: '0.85rem', marginBottom: 0 }}>
                Miles de pacientes ya eligieron el alquiler como la forma más inteligente de acceder a la magnetoterapia profesional.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="contacto" className="section section-alt cta-section-viewport">
        <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <motion.div 
            className="glass-card" 
            style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0.01 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.h2
              className="cta-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0.01 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >Contáctenos</motion.h2>
            <motion.p 
              className="cta-subheading"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0.01 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              Escribinos por WhatsApp y recibí asesoramiento gratuito y personalizado de la mano de un profesional en kinesiología, que te ayudará a encontrar el equipo ideal para tu caso.
            </motion.p>

            <div className="cta-steps-container">
              <motion.div 
                className="cta-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0.01 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="cta-step-icon">
                  <MessageCircle size={24} color="var(--accent)" className="lucide-icon" />
                </div>
                <p className="cta-step-title">1. Cuéntenos su caso</p>
                <p className="cta-step-desc">Dolencia o lesión</p>
              </motion.div>
              <motion.div 
                className="cta-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0.01 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="cta-step-icon">
                  <CheckCircle2 size={24} color="var(--accent)" className="lucide-icon" />
                </div>
                <p className="cta-step-title">2. Lo asesoramos</p>
                <p className="cta-step-desc">Equipo ideal para usted</p>
              </motion.div>
              <motion.div 
                className="cta-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0.01 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="cta-step-icon">
                  <Zap size={24} color="var(--accent)" className="lucide-icon" />
                </div>
                <p className="cta-step-title">3. Entrega rápida</p>
                <p className="cta-step-desc">En su domicilio</p>
              </motion.div>
            </div>

            <motion.a 
              href="https://wa.me/5491132530414?text=Hola,%20quisiera%20información%20sobre%20el%20alquiler%20de%20equipos%20de%20magnetoterapia" 
              target="_blank" 
              rel="noreferrer"
              className="btn-whatsapp-cta"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1.001 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ width: '22px', height: '22px', fill: 'white', flexShrink: 0 }}>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chateá con nosotros por WhatsApp
            </motion.a>

            <motion.p 
              style={{ marginTop: '1.5rem', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 0 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              Lun–Vie 9:00–18:00 · Sáb 9:00–13:00 · Respuesta inmediata
            </motion.p>
          </motion.div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2025 Magnetoterapia Web. Todos los derechos reservados.</p>
          <p style={{ fontSize: '0.85rem' }}>Equipos de uso profesional bajo indicación médica.</p>
        </div>
      </footer>

      <motion.a 
        href="https://wa.me/5491132530414" 
        className="whatsapp-widget" 
        target="_blank" 
        rel="noreferrer" 
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2.5, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </>
  );
}

export default App;
