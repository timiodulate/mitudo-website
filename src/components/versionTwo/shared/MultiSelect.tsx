"use client";
import React, { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Box, Flex, Text, chakra } from "@chakra-ui/react";

export interface MultiSelectOption {
	value: string;
	label: string;
	/** How many items this option would match; 0 greys it out. */
	count?: number;
}

export interface MultiSelectGroup {
	label?: string;
	options: MultiSelectOption[];
}

/** A dropdown of checkboxes: pick any number of options. */
export default function MultiSelect({
	label,
	groups,
	selected,
	onChange,
}: {
	label: string;
	groups: MultiSelectGroup[];
	selected: string[];
	onChange: (next: string[]) => void;
}) {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const id = `multiselect-${label.toLowerCase().replace(/\W+/g, "-")}`;

	useEffect(() => {
		if (!open) return;
		const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
		const onClick = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
		};
		document.addEventListener("keydown", onKey);
		document.addEventListener("mousedown", onClick);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.removeEventListener("mousedown", onClick);
		};
	}, [open]);

	const toggle = (value: string) =>
		onChange(selected.includes(value) ? selected.filter((v) => v !== value) : [...selected, value]);

	const summary =
		selected.length === 0
			? "All"
			: selected.length === 1
				? groups.flatMap((g) => g.options).find((o) => o.value === selected[0])?.label
				: `${selected.length} selected`;

	return (
		<Box ref={ref} position="relative" w={{ base: "full", md: "auto" }}>
			<chakra.button
				type="button"
				aria-haspopup="listbox"
				aria-expanded={open}
				aria-controls={id}
				onClick={() => setOpen((value) => !value)}
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				gap={2}
				w={{ base: "full", md: "auto" }}
				minW={{ md: "220px" }}
				maxW={{ md: "320px" }}
				px={4}
				py={2.5}
				bg="white"
				border="1px solid"
				borderColor={selected.length > 0 ? "#0077FF" : "slate.200"}
				borderRadius="xl"
				fontSize="sm"
				color="#0D1B2A"
				cursor="pointer"
				_hover={{ borderColor: "#0077FF" }}
			>
				<Text as="span" truncate>
					<Text as="span" color="#4A5568">
						{label}:
					</Text>{" "}
					<Text as="span" fontWeight="semibold">
						{summary}
					</Text>
				</Text>
				<Box flexShrink={0} color="#4A5568" transition="transform 0.2s" transform={open ? "rotate(180deg)" : "none"}>
					<ChevronDown size={16} />
				</Box>
			</chakra.button>

			{open && (
				<Box
					id={id}
					role="listbox"
					aria-multiselectable
					position="absolute"
					top="calc(100% + 6px)"
					left={0}
					zIndex={30}
					w={{ base: "full", md: "320px" }}
					maxH="360px"
					overflowY="auto"
					bg="white"
					border="1px solid"
					borderColor="slate.200"
					borderRadius="xl"
					boxShadow="0 20px 45px -15px rgba(13, 27, 42, 0.3)"
					py={2}
				>
					{selected.length > 0 && (
						<chakra.button
							type="button"
							onClick={() => onChange([])}
							w="full"
							textAlign="left"
							px={4}
							py={2}
							fontSize="xs"
							fontWeight="semibold"
							color="#0077FF"
							cursor="pointer"
							_hover={{ bg: "#F5F7FA" }}
						>
							Clear {label.toLowerCase()}
						</chakra.button>
					)}
					{groups.map((group, index) => (
						<Box key={group.label ?? index}>
							{group.label && (
								<Text px={4} pt={3} pb={1} fontSize="2xs" fontWeight="semibold" textTransform="uppercase" letterSpacing="wide" color="#4A5568">
									{group.label}
								</Text>
							)}
							{group.options.map((option) => {
								const checked = selected.includes(option.value);
								const empty = option.count === 0 && !checked;
								return (
									<chakra.button
										key={option.value}
										type="button"
										role="option"
										aria-selected={checked}
										onClick={() => toggle(option.value)}
										display="flex"
										alignItems="center"
										gap={3}
										w="full"
										textAlign="left"
										px={4}
										py={2}
										fontSize="sm"
										color={empty ? "slate.400" : "#0D1B2A"}
										cursor="pointer"
										_hover={{ bg: "#F5F7FA" }}
									>
										<Flex
											flexShrink={0}
											w={4}
											h={4}
											borderRadius="sm"
											border="1.5px solid"
											borderColor={checked ? "#0077FF" : "slate.300"}
											bg={checked ? "#0077FF" : "white"}
											color="white"
											align="center"
											justify="center"
										>
											{checked && <Check size={12} strokeWidth={3} />}
										</Flex>
										<Text as="span" flex={1}>
											{option.label}
										</Text>
										{option.count !== undefined && (
											<Text as="span" fontSize="xs" color="slate.400">
												{option.count}
											</Text>
										)}
									</chakra.button>
								);
							})}
						</Box>
					))}
				</Box>
			)}
		</Box>
	);
}
