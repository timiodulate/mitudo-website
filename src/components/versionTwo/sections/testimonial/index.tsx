"use client";
import React, { useState } from "react";
import NextLink from "next/link";
import { CheckCircle, Send, Star } from "lucide-react";
import {
	Box,
	Button,
	Flex,
	Input,
	Link as ChakraLink,
	NativeSelect,
	Stack,
	Text,
	Textarea,
	chakra,
} from "@chakra-ui/react";
import { toast } from "sonner";
import Navbar from "../../layouts/Header/Navbar";
import Footer from "../../layouts/Footer";
import PageHero from "../../shared/PageHero";
import SectionContainer from "../../shared/SectionContainer";
import { serviceCategories, getServicesByCategory } from "@/data/services";
import { ROUTES } from "@/data/routes";

const inputStyle = {
	bg: "gray.50",
	borderColor: "slate.200",
	_focus: { borderColor: "#0077FF", boxShadow: "0 0 0 1px #0077FF" },
};

function Label({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
	return (
		<Text as="span" display="block" fontSize="sm" fontWeight="medium" color="#0D1B2A" mb={2}>
			{children}
			{optional && (
				<Text as="span" fontWeight="normal" color="#4A5568">
					{" "}
					(optional)
				</Text>
			)}
		</Text>
	);
}

const EMPTY = {
	name: "",
	role: "",
	business: "",
	email: "",
	text: "",
	service_slug: "",
	rating: 5,
	consent: false,
	website: "", // honeypot
};

export default function TestimonialView({ initialService }: { initialService?: string }) {
	const [form, setForm] = useState({ ...EMPTY, service_slug: initialService ?? "" });
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [submitting, setSubmitting] = useState(false);
	const [done, setDone] = useState(false);
	const set = (key: keyof typeof form) => (event: { target: { value: string } }) =>
		setForm({ ...form, [key]: event.target.value });

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setSubmitting(true);
		setErrors({});
		try {
			const res = await fetch("/api/testimonials", {
				method: "POST",
				headers: { "Content-Type": "application/json", Accept: "application/json" },
				body: JSON.stringify({ ...form, service_slug: form.service_slug || null }),
			});
			const data = await res.json().catch(() => ({}));
			if (res.status === 422 && data.errors) {
				setErrors(
					Object.fromEntries(
						Object.entries(data.errors as Record<string, string[]>).map(([key, value]) => [key, value[0]]),
					),
				);
				return;
			}
			if (!res.ok) throw new Error(data.message);
			setDone(true);
		} catch (error) {
			toast.error(
				(error as Error).message || "Something went wrong. Please try again, or send it to us on WhatsApp.",
			);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<Box minH="100vh" bg="#F5F7FA" fontFamily="inter">
			<Navbar bold />

			<PageHero
				eyebrow="Testimonial"
				title="How was working with us?"
				intro="Thank you for trusting Mitudo with your business. A few honest words help other business owners decide, and help us keep getting better. It takes about two minutes."
			/>

			<Box as="section" py={{ base: 12, md: 16 }}>
				<SectionContainer narrow>
					<Box
						bg="white"
						borderRadius="3xl"
						p={{ base: 6, md: 8 }}
						border="1px solid"
						borderColor="slate.200"
						boxShadow="sm"
					>
						{done ? (
							<Stack gap={4} textAlign="center" py={10} align="center">
								<Box bg="#10B981" color="white" borderRadius="full" boxSize={16} display="grid" placeItems="center">
									<CheckCircle size={28} />
								</Box>
								<Text fontSize="xl" fontWeight="bold" fontFamily="poppins" color="#0D1B2A">
									Thank you!
								</Text>
								<Text color="#4A5568" fontSize="sm" maxW="md">
									We&apos;ve received your testimonial. We read every one, and
									we&apos;ll let you know if we share it on our website.
								</Text>
								<ChakraLink as={NextLink} href={ROUTES.home} color="#0077FF" fontSize="sm">
									Back to the homepage
								</ChakraLink>
							</Stack>
						) : (
							<Box as="form" onSubmit={handleSubmit}>
								<Stack gap={5}>
									<Box>
										<Label>How would you rate us?</Label>
										<Flex gap={1} role="radiogroup" aria-label="Rating">
											{[1, 2, 3, 4, 5].map((value) => (
												<chakra.button
													key={value}
													type="button"
													role="radio"
													aria-checked={form.rating === value}
													aria-label={`${value} star${value > 1 ? "s" : ""}`}
													onClick={() => setForm({ ...form, rating: value })}
													color={value <= form.rating ? "#00C2CB" : "slate.300"}
													cursor="pointer"
													p={0.5}
												>
													<Star size={28} fill="currentColor" />
												</chakra.button>
											))}
										</Flex>
									</Box>

									<Box>
										<Label>Your testimonial</Label>
										<Textarea
											rows={5}
											required
											maxLength={2000}
											value={form.text}
											onChange={set("text")}
											placeholder="What did we do for you, and what changed for your business?"
											{...inputStyle}
										/>
										{errors.text && <Text color="red.500" fontSize="xs" mt={1}>{errors.text}</Text>}
									</Box>

									<Box>
										<Label optional>Which service was it for?</Label>
										<NativeSelect.Root>
											<NativeSelect.Field value={form.service_slug} onChange={set("service_slug")} {...inputStyle}>
												<option value="">General / several services</option>
												{serviceCategories.map((category) => (
													<optgroup key={category.id} label={category.title}>
														{getServicesByCategory(category.id).map((service) => (
															<option key={service.slug} value={service.slug}>
																{service.name}
															</option>
														))}
													</optgroup>
												))}
											</NativeSelect.Field>
											<NativeSelect.Indicator />
										</NativeSelect.Root>
									</Box>

									<Flex gap={5} direction={{ base: "column", md: "row" }}>
										<Box flex={1}>
											<Label>Your name</Label>
											<Input required maxLength={120} value={form.name} onChange={set("name")} placeholder="Ada Okonkwo" {...inputStyle} />
											{errors.name && <Text color="red.500" fontSize="xs" mt={1}>{errors.name}</Text>}
										</Box>
										<Box flex={1}>
											<Label optional>Your role</Label>
											<Input maxLength={120} value={form.role} onChange={set("role")} placeholder="Founder" {...inputStyle} />
										</Box>
									</Flex>

									<Flex gap={5} direction={{ base: "column", md: "row" }}>
										<Box flex={1}>
											<Label optional>Business or organisation</Label>
											<Input maxLength={160} value={form.business} onChange={set("business")} placeholder="Your business name" {...inputStyle} />
										</Box>
										<Box flex={1}>
											<Label optional>Email</Label>
											<Input type="email" maxLength={190} value={form.email} onChange={set("email")} placeholder="Not shown publicly" {...inputStyle} />
											{errors.email && <Text color="red.500" fontSize="xs" mt={1}>{errors.email}</Text>}
										</Box>
									</Flex>

									{/* Honeypot: hidden from people, filled in by bots. */}
									<Box position="absolute" left="-9999px" aria-hidden>
										<label>
											Website
											<input tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
										</label>
									</Box>

									<Box as="label" display="flex" gap={3} alignItems="flex-start" fontSize="sm" color="#4A5568" cursor="pointer">
										<input
											type="checkbox"
											checked={form.consent}
											onChange={(event) => setForm({ ...form, consent: event.target.checked })}
											style={{ marginTop: 3, accentColor: "#0077FF" }}
											required
										/>
										<span>
											Mitudo Agency can show this testimonial, with my name, role and
											business, on its website and social media.
										</span>
									</Box>
									{errors.consent && <Text color="red.500" fontSize="xs">{errors.consent}</Text>}

									<Button
										type="submit"
										size="lg"
										bg="#0077FF"
										color="white"
										borderRadius="full"
										_hover={{ bg: "#0066DD" }}
										loading={submitting}
									>
										<Send size={16} />
										Send testimonial
									</Button>
								</Stack>
							</Box>
						)}
					</Box>
				</SectionContainer>
			</Box>

			<Footer />
		</Box>
	);
}
