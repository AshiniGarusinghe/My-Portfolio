import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out! I'll respond to your message as soon as possible.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have an idea you'd like to bring to life or a project you'd like to collaborate on? 
          Let's connect. I'm always open to exciting new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center">
              <ContactItem icon={<Mail className="h-6 w-6 text-primary" />} label="Email" value="ashinigarusinghe740@gmail.com" link="mailto:ashinigarusinghe740@gmail.com" />
              <ContactItem icon={<Phone className="h-6 w-6 text-primary" />} label="Phone" value="+94 71 091 3042" link="+94 71 091 3042" />
              <ContactItem icon={<MapPin className="h-6 w-6 text-primary" />} label="Location" value="Colombo, Sri Lanka" />
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <SocialLink icon={<Linkedin />} />
                <SocialLink icon={<Twitter />} />
                <SocialLink icon={<Instagram />} />
                <SocialLink icon={<Twitch />} />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <FormInput id="name" label="Your Name" placeholder="Pedro Machado..." type="text" />
              <FormInput id="email" label="Your Email" placeholder="john@gmail.com" type="email" />
              <FormTextArea id="message" label="Your Message" placeholder="Hello, I'd like to talk about..." />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Components

const ContactItem = ({ icon, label, value, link }) => (
  <div className="flex items-start space-x-4">
    <div className="p-3 rounded-full bg-primary/10">{icon}</div>
    <div>
      <h4 className="font-medium">{label}</h4>
      {link ? (
        <a href={link} className="text-muted-foreground hover:text-primary transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-muted-foreground">{value}</p>
      )}
    </div>
  </div>
);

const SocialLink = ({ icon }) => (
  <a href="#" target="_blank" rel="noopener noreferrer">
    {icon}
  </a>
);

const FormInput = ({ id, label, placeholder, type = "text" }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={id}
      required
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
      placeholder={placeholder}
    />
  </div>
);

const FormTextArea = ({ id, label, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium mb-2">
      {label}
    </label>
    <textarea
      id={id}
      name={id}
      required
      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
      placeholder={placeholder}
    />
  </div>
);
